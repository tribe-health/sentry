import {QueryFieldValue} from 'sentry/utils/discover/fields';
import {useMetricMetas} from 'sentry/utils/useMetricMetas';
import {useMetricTags} from 'sentry/utils/useMetricTags';
import {DisplayType, WidgetType} from 'sentry/views/dashboardsV2/types';
import {generateMetricsWidgetFieldOptions} from 'sentry/views/dashboardsV2/widgetBuilder/metricWidget/fields';

import {YAxisSelector} from './yAxisSelector';

interface Props {
  aggregates: QueryFieldValue[];
  displayType: DisplayType;
  onYAxisChange: (newFields: QueryFieldValue[]) => void;
  widgetType: WidgetType;
  queryErrors?: Record<string, any>[];
}

export function ReleaseYAxisSelector({
  aggregates,
  displayType,
  widgetType,
  onYAxisChange,
  queryErrors,
}: Props) {
  const {metricTags} = useMetricTags();
  const {metricMetas} = useMetricMetas();

  return (
    <YAxisSelector
      widgetType={widgetType}
      displayType={displayType}
      aggregates={aggregates}
      onChange={onYAxisChange}
      errors={queryErrors}
      fieldOptions={generateMetricsWidgetFieldOptions(
        Object.values(metricMetas),
        Object.values(metricTags).map(({key}) => key)
      )}
    />
  );
}
