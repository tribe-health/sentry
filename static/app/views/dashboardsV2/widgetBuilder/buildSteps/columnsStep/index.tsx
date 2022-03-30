import cloneDeep from 'lodash/cloneDeep';

import ExternalLink from 'sentry/components/links/externalLink';
import {t, tct} from 'sentry/locale';
import MetricsMetaStore from 'sentry/stores/metricsMetaStore';
import MetricsTagStore from 'sentry/stores/metricsTagStore';
import {useLegacyStore} from 'sentry/stores/useLegacyStore';
import {Organization, TagCollection} from 'sentry/types';
import {
  generateFieldAsString,
  getColumnsAndAggregatesAsStrings,
  QueryFieldValue,
} from 'sentry/utils/discover/fields';
import Measurements from 'sentry/utils/measurements/measurements';
import {DisplayType, WidgetQuery, WidgetType} from 'sentry/views/dashboardsV2/types';
import {generateIssueWidgetFieldOptions} from 'sentry/views/dashboardsV2/widgetBuilder/issueWidget/utils';
import {generateMetricsWidgetFieldOptions} from 'sentry/views/dashboardsV2/widgetBuilder/metricWidget/fields';

import {DataSet, getAmendedFieldOptions} from '../../utils';
import {BuildStep} from '../buildStep';

import {ColumnFields} from './columnFields';

interface Props {
  dataSet: DataSet;
  displayType: DisplayType;
  explodedFields: QueryFieldValue[];
  onQueryChange: (queryIndex: number, newQuery: WidgetQuery) => void;
  onYAxisOrColumnFieldChange: (newFields: QueryFieldValue[]) => void;
  organization: Organization;
  queries: WidgetQuery[];
  tags: TagCollection;
  widgetType: WidgetType;
  queryErrors?: Record<string, any>[];
}

export function ColumnsStep({
  dataSet,
  displayType,
  onQueryChange,
  organization,
  queries,
  widgetType,
  onYAxisOrColumnFieldChange,
  queryErrors,
  explodedFields,
  tags,
}: Props) {
  const {metricsMeta} = useLegacyStore(MetricsMetaStore);
  const {metricsTags} = useLegacyStore(MetricsTagStore);

  const x = generateMetricsWidgetFieldOptions(
    Object.values(metricsMeta),
    Object.values(metricsTags).map(({key}) => key)
  );

  console.log({x});

  return (
    <BuildStep
      title={t('Choose your columns')}
      description={
        dataSet !== DataSet.ISSUES
          ? tct(
              'To group events, add [functionLink: functions] f(x) that may take in additional parameters. [tagFieldLink: Tag and field] columns will help you view more details about the events (i.e. title).',
              {
                functionLink: (
                  <ExternalLink href="https://docs.sentry.io/product/discover-queries/query-builder/#filter-by-table-columns" />
                ),
                tagFieldLink: (
                  <ExternalLink href="https://docs.sentry.io/product/sentry-basics/search/searchable-properties/#event-properties" />
                ),
              }
            )
          : tct(
              '[tagFieldLink: Tag and field] columns will help you view more details about the issues (i.e. title).',
              {
                tagFieldLink: (
                  <ExternalLink href="https://docs.sentry.io/product/sentry-basics/search/searchable-properties/#event-properties" />
                ),
              }
            )
      }
    >
      {dataSet === DataSet.EVENTS ? (
        <Measurements>
          {({measurements}) => (
            <ColumnFields
              displayType={displayType}
              organization={organization}
              widgetType={widgetType}
              fields={explodedFields}
              errors={queryErrors}
              fieldOptions={getAmendedFieldOptions({measurements, organization, tags})}
              onChange={onYAxisOrColumnFieldChange}
            />
          )}
        </Measurements>
      ) : (
        <ColumnFields
          displayType={displayType}
          organization={organization}
          widgetType={widgetType}
          fields={explodedFields}
          errors={queryErrors?.[0] ? [queryErrors?.[0]] : undefined}
          fieldOptions={
            dataSet === DataSet.RELEASE
              ? generateMetricsWidgetFieldOptions(
                  Object.values(metricsMeta),
                  Object.values(metricsTags).map(({key}) => key)
                )
              : generateIssueWidgetFieldOptions()
          }
          onChange={newFields => {
            const fieldStrings = newFields.map(generateFieldAsString);
            const splitFields = getColumnsAndAggregatesAsStrings(newFields);
            const newQuery = cloneDeep(queries[0]);
            newQuery.fields = fieldStrings;
            newQuery.aggregates = splitFields.aggregates;
            newQuery.columns = splitFields.columns;
            onQueryChange(0, newQuery);
          }}
        />
      )}
    </BuildStep>
  );
}
