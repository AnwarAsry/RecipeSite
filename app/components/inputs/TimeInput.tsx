import { NumberInput } from "./NumberInput";
import { SelectInput } from "./SelectInput";

export const TimeInput = () => {
    return (
        <div className="flex space-x-2">
            <NumberInput id="time" placeholder="30" />
            <SelectInput>
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
            </SelectInput>
        </div>
    );
}