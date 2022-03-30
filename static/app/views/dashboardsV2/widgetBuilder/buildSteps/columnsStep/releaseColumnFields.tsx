import {Organization} from 'sentry/types';
import {QueryFieldValue} from 'sentry/utils/discover/fields';
import {useMetricMetas} from 'sentry/utils/useMetricMetas';
import {useMetricTags} from 'sentry/utils/useMetricTags';
import {DisplayType, WidgetType} from 'sentry/views/dashboardsV2/types';
import {generateMetricsWidgetFieldOptions} from 'sentry/views/dashboardsV2/widgetBuilder/metricWidget/fields';

import {ColumnFields} from './columnFields';

interface Props {
  displayType: DisplayType;
  explodedFields: QueryFieldValue[];
  onYAxisOrColumnFieldChange: (newFields: QueryFieldValue[]) => void;
  organization: Organization;
  widgetType: WidgetType;
  queryErrors?: Record<string, any>[];
}

export function ReleaseColumnFields({
  displayType,
  organization,
  widgetType,
  explodedFields,
  queryErrors,
  onYAxisOrColumnFieldChange,
}: Props) {
  const {metricTags} = useMetricTags();
  const {metricMetas} = useMetricMetas();

  return (
    <ColumnFields
      displayType={displayType}
      organization={organization}
      widgetType={widgetType}
      fields={explodedFields}
      errors={queryErrors?.[0] ? [queryErrors?.[0]] : undefined}
      fieldOptions={generateMetricsWidgetFieldOptions(
        Object.values(metricMetas),
        Object.values(metricTags).map(({key}) => key)
      )}
      onChange={newField => {
        console.log(newField);
      }}
    />
  );
}
