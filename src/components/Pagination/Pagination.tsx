import React, {FC} from 'react';
import { Pagination } from '@mui/material';

interface IPaginationProps {
    count: number,
    page?: number,
    onBtnClick: (event:any, pageNumber:number) => void,
};

const PaginationBar: FC<IPaginationProps> = ({
    count,
    page,
    onBtnClick,
}) => {
    return (
        <div>
            <Pagination count={count} page={page} onChange={onBtnClick} />
        </div>
    );
};

export default PaginationBar;