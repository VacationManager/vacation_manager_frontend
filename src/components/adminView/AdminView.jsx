import React, { useState } from 'react';
import { Accordion, Button, Input } from 'chayns-components';
import Department from './department/Department';

import './adminView.scss';

const AdminView = ({
    departments,
    createDepartment,
}) => {
    const [name, setName] = useState('');

    const addDepartment = async () => {
        const fetch = await createDepartment(name);
        if (fetch) {
            setName('');
        }
    };

    return (
        <Accordion
            head="Administration"
            className="admin_accordion"
            dataGroup="1"
        >
            <Department
                departments={departments}
            />
            <Accordion
                isWrapped
                head="Abteilung hinzufügen"
                dataGroup="2"
                icon="ts-plus"
            >
                <Input
                    placeholder="Name"
                    value={name}
                    onChange={setName}
                    className="name_input"
                />
                <div
                    style={{
                        textAlign: 'center',
                        paddingTop: '10px',
                    }}
                >
                    <Button
                        disabled={name.trim().length === 0}
                        onClick={addDepartment}
                    >
                        Hinzufügen
                    </Button>
                </div>
            </Accordion>
        </Accordion>
    )
};

export default AdminView;
