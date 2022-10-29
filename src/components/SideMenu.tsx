import React, {useEffect, memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesPending} from "../store/actions";
import {getCategories} from "../store/selectors";
import {SidebarContainer, Menu, MenuItem } from "../styles";

const SideMenu: React.FC = () => {
    // const {id} = useParams()
    const dispatch = useDispatch()
    const {categories} = useSelector(getCategories)

    useEffect(() => {
        if(categories.length === 0){
            dispatch(getCategoriesPending());
        }
    }, [categories, dispatch])



    return (
        <SidebarContainer>
            {categories.map((category: { name: string, id: number }) =>
                <Menu key={category.id}>
                    <MenuItem href={`/category/${category.id}`}>
                        {category.name}
                    </MenuItem>
                </Menu>
            )}
        </SidebarContainer>
    );
};

export default memo(SideMenu);
