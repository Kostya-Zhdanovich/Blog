import React, {FC} from 'react';
import { Select , MenuItem } from '@mui/material';

interface ISelectProps {
    value: number,
    label: string,
    onBtnClick: (event:any) => void,
};

const SelectPagination: FC<ISelectProps> = ({
    value,
    label,
    onBtnClick
}) => {
    return (
        <div>
            <Select value={value} label onChange={onBtnClick}>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>   
        </div>
    );
};

export default SelectPagination;