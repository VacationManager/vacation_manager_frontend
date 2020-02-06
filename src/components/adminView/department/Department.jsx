import React, { useState } from 'react';
import { Accordion, List, ListItem, Input, Button, Checkbox } from 'chayns-components';
import './department.scss';

const Department = ({
    departments,
}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [mailAddress, setMailAddress] = useState('');
    const [vacationDays, setVacationDays] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const createUser = async () => {
        console.log(firstName);
        console.log(lastName);
        console.log(password);
        console.log(mailAddress);
        console.log(isAdmin);
    };

    return (
        <>
            {departments && departments.length > 0
                && (
                    departments.map((d) => {
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
                                                <ListItem
                                                    title={`${user.firstName} ${user.lastName}`}
                                                    subtitle={user.mailAddress}
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
                        )
                    })
                )}
        </>
    )
};

export default Department;