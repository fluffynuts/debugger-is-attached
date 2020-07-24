// adapted from https://github.com/nodejs/node/issues/9617#issuecomment-260729689
import { Server } from "net";

type SocketError = Error & {
  code: string;
}

export function debuggerIsAttached(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    require("net").createServer().on("error", (err: SocketError) => {
      return err && err.code === "EADDRINUSE"
          ? resolve(true)
          : reject(err);
    }).listen(process.debugPort, "localhost", function(this: Server) {
      this.close();
      resolve(false);
    })
  });
}
