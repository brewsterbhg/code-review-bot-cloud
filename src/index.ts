import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';

import { buildNotification, sendNotification } from './slack';

export const postToSlack: HttpFunction = async (req, res): Promise<void> => {
  try {
    const notification = buildNotification(req.body);

    if (notification) {
      await sendNotification(notification);
    }
  } catch (e) {
    console.error(e);
  } finally {
    res.end();
  }
};
