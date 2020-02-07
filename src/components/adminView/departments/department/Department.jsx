import React, { useState } from 'react';
import { Accordion, List, ListItem, Input, Button, Checkbox, ContextMenu } from 'chayns-components';
import UserContainer from './user/UserContainer';

const Department = ({
    fetchCreateUser,
    d,
}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [mailAddress, setMailAddress] = useState('');
    const [vacationDays, setVacationDays] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isManager, setIsManager] = useState(false);

    const createUser = async () => {
        const fetch = await fetchCreateUser({
            firstName,
            lastName,
            password,
            mailAddress,
            isAdmin,
            vacationDays,
            departmentId: d.id,
            isManager,
        });
        if (fetch) {
            setFirstName('');
            setLastName('');
            setPassword('');
            setIsAdmin(false);
            setIsManager(false);
            setVacationDays('');
            setMailAddress('');
        }
    };

    return (
        <Accordion
            head={d.departmentName}
            isWrapped
            dataGroup="2"
        >
            {d.users && d.users.length > 0
            && (
                <List
                    className="my_list"
                >
                    {d.users.map((user) => (
                        <UserContainer
                            user={user}
                            key={user.id}
                        />
                    ))}
                </List>
            )}
            <Accordion
                head="Nutzer hinzufügen"
                isWrapped
                icon="ts-plus"
            >
                <Input
                    placeholder="Vorname"
                    value={firstName}
                    onChange={setFirstName}
                />
                <Input
                    placeholder="Name"
                    value={lastName}
                    onChange={setLastName}
                />
                <Input
                    placeholder="eMail Adresse"
                    value={mailAddress}
                    onChange={setMailAddress}
                />
                <Input
                    placeholder="Password"
                    value={password}
                    onChange={setPassword}
                />
                <Input
                    placeholder="Urlaubstage"
                    value={vacationDays}
                    onChange={(value) => {
                        if (value.match(/^\d+$/)) {
                            setVacationDays(parseInt(value));
                        } else if (value === '') {
                            setVacationDays(value);
                        }
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <p>Administrator?</p>
                    <Checkbox
                        value={isAdmin}
                        onChange={setIsAdmin}
                    />
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <p>Teamleiter?</p>
                    <Checkbox
                        value={isManager}
                        onChange={setIsManager}
                    />
                </div>


                <div
                    style={{
                        textAlign: 'center',
                        paddingTop: '10px',
                    }}
                >
                    <Button
                        disabled={
                            firstName.trim().length === 0
                            || lastName.trim().length === 0
                            || password.trim().length === 0
                            || mailAddress.trim().length === 0
                            || typeof vacationDays !== 'number'
                        }
                        onClick={createUser}
                    >
                    Hinzufügen
                    </Button>
                </div>

            </Accordion>
        </Accordion>
    );
};

export default Department;
