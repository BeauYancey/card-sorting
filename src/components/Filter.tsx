import { CheckboxGroup, Group, Checkbox, Stack } from "@mantine/core";
import { FunnelIcon } from "@phosphor-icons/react";

interface FilterProps {
  options: string[];
  filter: string[];
  setFilter: (filter: string[]) => void;
}



const Filter: React.FC<FilterProps> = ({options, filter, setFilter}) => {
  return (
    <CheckboxGroup
      value={filter}
      onChange={setFilter}
      label={<Group gap="xs"><FunnelIcon weight="bold" size={16}/>Filter By</Group>}
    >
      <Stack gap={4}>
        {options.map(option => (
          <Checkbox key={option} value={option} label={option} />
        ))}
      </Stack>
    </CheckboxGroup>
  );
}

export default Filter;