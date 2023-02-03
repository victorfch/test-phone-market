export const SelectPreferences = ({ updateValue, phone, field }) => {
  return (
    <select onChange={({ target }) => updateValue(target.value)}>
      {phone && phone[field]?.length > 1 && (
        <option selected disabled>
          Select {field}
        </option>
      )}
      {phone &&
        phone[field]?.map(line => (
          <option key={line.value} value={line.value}>
            {line.text}
          </option>
        ))}
    </select>
  )
}
