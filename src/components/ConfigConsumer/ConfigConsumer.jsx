// ./src/components/ConfigConsumer/ConfigConsumer.jsx
import { useConfig } from '@/providers';
import styles from './ConfigConsumer.module.css';

const ConfigConsumer = () => {
    const config = useConfig();

    return (
        <div className={styles.root}>
            <div className={styles.section}>
                <div className={styles.title}>Configuration (read-only)</div>
                <pre className={styles.pre}>{JSON.stringify(config, null, 2)}</pre>
            </div>
        </div>
    );
};

export default ConfigConsumer;
