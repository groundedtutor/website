import { useCallback, useState } from "preact/hooks";
import { forwardRef } from "preact/compat";

interface ToggleProps {
  isEnabled?: boolean;
  description: string;
  onChange?: (isEnabled: boolean) => void;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ isEnabled = false, description, onChange }, ref) => {
    const [enabled, setEnabled] = useState(isEnabled);

    const onToggled = useCallback(() => {
      setEnabled(!enabled);
      onChange?.(!enabled);
    }, [onChange, enabled]);

    return (
      <input
        ref={ref}
        type="checkbox"
        className="toggle toggle-primary"
        checked={enabled}
        onChange={onToggled}>
        <span className="sr-only">{description}</span>
      </input>
    );
  }
);

export default Toggle;
