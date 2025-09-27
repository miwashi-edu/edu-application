// ./src/components/ConfigConsumer/ConfigConsumer.jsx
import { useMemo, useState } from 'react';
import {ConfigProvider, useConfig } from '@/providers';

function InnerViewer() {
    const cfg = useConfig();
    return (
        <pre style={{ padding: 12, background: '#f6f8fa', borderRadius: 8, overflow: 'auto' }}>
      {JSON.stringify(cfg, null, 2)}
    </pre>
    );
}

/**
 * Example consumer that reads config and "manipulates" it by creating a nested
 * provider with overrides (without mutating the original context).
 */
export default function ConfigConsumer() {
    const parentConfig = useConfig();

    // Example: allow overriding a couple of common fields
    const [apiBaseUrl, setApiBaseUrl] = useState(parentConfig.apiBaseUrl ?? '');
    const [featureFlag, setFeatureFlag] = useState(
        typeof parentConfig.featureFlag === 'boolean' ? parentConfig.featureFlag : false
    );

    const overriddenConfig = useMemo(
        () => ({
            ...parentConfig,
            ...(apiBaseUrl ? { apiBaseUrl } : {}),
            featureFlag,
        }),
        [parentConfig, apiBaseUrl, featureFlag]
    );

    return (
        <div style={{ display: 'grid', gap: 16 }}>
            <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Parent config (from nearest provider)</div>
                <pre style={{ padding: 12, background: '#f6f8fa', borderRadius: 8, overflow: 'auto' }}>
          {JSON.stringify(parentConfig, null, 2)}
        </pre>
            </div>

            <div style={{ display: 'grid', gap: 8 }}>
                <label style={{ display: 'grid', gap: 4 }}>
                    <span>apiBaseUrl override</span>
                    <input
                        value={apiBaseUrl}
                        onChange={(e) => setApiBaseUrl(e.target.value)}
                        placeholder="https://api.example.com"
                        style={{ padding: 8, borderRadius: 6, border: '1px solid #d0d7de' }}
                    />
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                        type="checkbox"
                        checked={featureFlag}
                        onChange={(e) => setFeatureFlag(e.target.checked)}
                    />
                    <span>featureFlag</span>
                </label>
            </div>

            <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Overridden view (via nested provider)</div>
                <ConfigProvider value={overriddenConfig}>
                    <InnerViewer />
                </ConfigProvider>
            </div>
        </div>
    );
}
