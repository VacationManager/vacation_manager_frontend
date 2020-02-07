import React, { useEffect } from 'react';
import { Accordion } from 'chayns-components';

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
                            <p
                                key={vaca.id}
                            >{vaca.userId}</p>
                        )
                    })}
                </div>
            </Accordion>
        )
    }
    return null;
}

export default DepartmentAdministration;
