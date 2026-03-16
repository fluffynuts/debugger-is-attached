import inspector from "inspector";

export function debuggerIsAttached(): boolean {
  return !!inspector.url()
}
