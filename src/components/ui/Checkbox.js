export function Checkbox({ name, checked, onChange }) {
    return (
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5"
      />
    );
  }
  