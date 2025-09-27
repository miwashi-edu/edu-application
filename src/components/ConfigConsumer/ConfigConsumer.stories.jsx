import React from 'react';
import {ConfigProvider} from "@/providers";
import ConfigConsumer from './ConfigConsumer';

export default {
    title: 'ConfigConsumer',
    component: ConfigConsumer,
};

export const Default = {
    render: (args) => <ConfigProvider><ConfigConsumer /></ConfigProvider>
}