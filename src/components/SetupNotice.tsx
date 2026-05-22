import type { SetupNeededState } from "../types/shell";

type SetupNoticeProps = {
  notice: SetupNeededState;
};

export function SetupNotice({ notice }: SetupNoticeProps) {
  return (
    <div className={`setup-notice ${notice.severity}`}>
      <strong>{notice.title}</strong>
      <p>{notice.message}</p>
    </div>
  );
}
