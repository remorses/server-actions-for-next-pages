'poor man user server';

import { createRpcFetcher as _createRpcFetcher } from "server-actions-for-pages/dist/browser";
export const serverAction = /*#__PURE__*/_createRpcFetcher("/api/actions-edge", "serverAction");