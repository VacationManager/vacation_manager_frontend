import React from 'react';
import { Accordion, List, ListItem, Input, Button, Checkbox } from 'chayns-components';
import Department from './department/Department';
import './departments.scss';

const Departments = ({
    departments,
    fetchCreateUser,
}) => (
    <>
        {departments && departments.length > 0
                && (
                    departments.map((d) => (
                        <Department
                            d={d}
                            fetchCreateUser={fetchCreateUser}
                            key={d.id}
                        />
                    ))
                )}
    </>
);

export default Departments;
