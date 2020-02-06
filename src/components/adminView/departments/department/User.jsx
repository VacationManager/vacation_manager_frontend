import React from 'react';
import { ListItem, ContextMenu } from 'chayns-components';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

const User = ({
    user,
}) => {
    const deleteUser = () => {

    };

    const updateUser = () => {

    };

    return (
        <ListItem
            title={`${user.firstName} ${user.lastName}`}
            subtitle={user.mailAddress}
            right={
                <ContextMenu
                    items={[{
                        onClick: updateUser,
                        text: user.isAdmin ? 'Admin entfernen' : 'Admin hinzufügen',
                    }, {
                        onClick: updateUser,
                        text: user.isManager ? 'Manager entfernen' : 'Manager hinzufügen',
                    }, {
                        onClick: deleteUser,
                        text: 'Löschen',
                        icon: faTrash,
                    }]}
                />}
        />
    )
};

export default User;
