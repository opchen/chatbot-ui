import { Plugin, PluginID } from '@/types/plugin';

export const getEndpoint = (plugin: Plugin | null) => {
  if (!plugin) {
    return 'ai/api/chat';
  }

  if (plugin.id === PluginID.GOOGLE_SEARCH) {
    return 'ai/api/google';
  }

  return 'ai/api/chat';
};
