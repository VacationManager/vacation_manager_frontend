import React, { useEffect } from 'react';
import { Accordion, Button } from 'chayns-components';
import './departmentAdministration.scss';

const DepartmentAdministration = ({
    manageDepartment,
    getPendingVacations,
    pendingVacations
}) => {
    useEffect(() => {
        getPendingVacations();
    }, []);
    
    if (manageDepartment) {
        return (
            <Accordion
                head={`${manageDepartment.departmentName} verwalten`}
            >
                <div
                    className="accordion__content"
                >
                    {pendingVacations && pendingVacations.length > 0
                    && pendingVacations.map((vaca) => {
                        return (
                            <div
                                key={vaca.id}
                            >
                                {vaca.userId}

                                <div
                                    className="button_wrapper"
                                >
                                    <Button
                                        style={{
                                            marginRight: '5px',
                                        }}
                                    >Annehmen</Button>
                                    <Button>Ablehnen</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Accordion>
        )
    }
    return null;
}

export default DepartmentAdministration;
