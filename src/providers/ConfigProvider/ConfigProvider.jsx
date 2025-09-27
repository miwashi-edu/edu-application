import ConfigContext from '@/providers/ConfigProvider/ConfigContext';
import { configuration } from '@/config'; // from your barrel re-exporting ./config/configuration.js

/**
 * Optionally pass `value` to override the default imported `configuration`.
 */
export default function ConfigProvider({ children, value }) {
    const cfg = value ?? configuration;
    return (
        <ConfigContext.Provider value={cfg}>
            {children}
        </ConfigContext.Provider>
    );
}
