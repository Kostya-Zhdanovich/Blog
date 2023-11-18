import React, { FC , useState , useEffect , useCallback } from 'react';
import { useActions } from '../../store/Hooks/useActions';
import { SearchInputWrapper , SearchInputContainer , SearchInputField , StyledButton , StyledSearchIcon , StyledCloseIcon } from './styles';

function debounce (f:any, ms:number) {
    let timeout:any;

    return function () {
        //@ts-ignore
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => f.apply(context, args), ms)
    }
};

const SearchInput = () => {
    const[openInput, setOpenInput] = useState(false);
    const[value, setValue] = useState();
    const { getPostsAsync , searchPostsAsync , searchInput , clearInput } = useActions();

    const handleOpenInput = () => {
        setOpenInput(true);
    };

    const handleCloseInput = () => {
        setOpenInput(false);
        getPostsAsync();
        clearInput();
    };

    const handleChangeValue = (event:any) => {
        setValue(event.target.value);
        searchInput();

        if(!event.target.value) {
            getPostsAsync();
            clearInput();
        };
    };

    const debouncedOnChange = useCallback(debounce(handleChangeValue, 500), []);

    useEffect(() => {
        if(value) {
            searchPostsAsync(value)
        }    
    }, [value]);

    return (
        <SearchInputWrapper>
            <SearchInputContainer>
                {openInput && (
                    <SearchInputField placeholder='Search...' onChange={debouncedOnChange}></SearchInputField>
                )}
                
                {openInput && (
                    <StyledButton onClick={handleCloseInput}><StyledCloseIcon fontSize='large'/></StyledButton>
                )}

            </SearchInputContainer>

            <StyledButton onClick={handleOpenInput}><StyledSearchIcon fontSize='large'/></StyledButton>
        </SearchInputWrapper>
    );
};

export default SearchInput;