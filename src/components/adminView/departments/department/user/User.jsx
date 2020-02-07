import React from 'react';
import { ListItem, ContextMenu } from 'chayns-components';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';


const User = ({
    user,
    deleteUser,
    updateUser,
}) => {
    const deleteFunc = () => {  
        deleteUser(user.id);
    };

    const updateUserAdmin = () => {
        console.log('here');
        updateUser({
            id: user.id,
            isAdmin: !user.isAdmin,
        });
    };

    const updateUserManager = () => {
        updateUser({
            id: user.id,
            isManager: !user.isManager,
        });
    };

    return (
        <ListItem
            title={`${user.firstName} ${user.lastName}`}
            subtitle={user.mailAddress}
            right={
                <ContextMenu
                    items={[{
                        onClick: updateUserAdmin,
                        text: user.isAdmin ? 'Admin entfernen' : 'Admin hinzufügen',
                        icon: user.isAdmin ? faTimesCircle : faCheck,
                    }, {
                        onClick: updateUserManager,
                        text: user.isManager ? 'Manager entfernen' : 'Manager hinzufügen',
                        icon: user.isManager ? faTimesCircle : faCheck,
                    }, {
                        onClick: deleteFunc,
                        text: 'Löschen',
                        icon: faTrash,
                    }]}
                />}
        />
    )
};

export default User;
