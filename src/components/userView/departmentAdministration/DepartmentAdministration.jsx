import React, { useEffect } from 'react';
import { Accordion, Button } from 'chayns-components';
import './departmentAdministration.scss';
import { format, parseISO, isSameDay } from 'date-fns';
import { de } from 'date-fns/locale';

const DepartmentAdministration = ({
    manageDepartment,
    getPendingVacations,
    pendingVacations,
    handleVacationRequestState,
}) => {
    useEffect(() => {
        getPendingVacations();
    }, []);

    const handleVacationRequest = async (id, newState) => {
        const success = await handleVacationRequestState({
            requestId: id,
            newState,
        });
    }

    if (manageDepartment) {
        return (
            <>
                <Accordion
                    head={`${manageDepartment.departmentName} verwalten`}
                >
                    <div
                        className="accordion__content vacation_wrapper"
                    >
                        {pendingVacations && pendingVacations.length > 0
                            && pendingVacations.map((vaca) => {
                                const {
                                    startTime,
                                    endTime,
                                    firstName,
                                    lastName,
                                    id,
                                    userId,
                                } = vaca;

                                const startDate = format(parseISO(startTime), 'dd. MMMM', { locale: de });
                                const endDate = format(parseISO(endTime), 'dd. MMMM yyyy', { locale: de });
                                const sameDay = isSameDay(parseISO(startTime), parseISO(endTime));

                                return (
                                    <div
                                        key={id}
                                        className="vacation_request"
                                    >
                                        {sameDay
                                            ? (
                                                <div
                                                    className="request_text"
                                                >
                                                    Für den {endDate} wurde ein Antrag von {firstName} {lastName} gestellt.
                                                </div>
                                            ) : (
                                                <div
                                                    className="request_text"
                                                >
                                                    Für den Zeitraum vom {startDate} bis zum {endDate} wurde ein Antrag von {firstName} {lastName} gestellt.
                                                </div>
                                            )}

                                        <div
                                            className="button_wrapper"
                                        >
                                            <Button
                                                style={{
                                                    marginRight: '5px',
                                                }}
                                                onClick={() => {
                                                    handleVacationRequest(id, 1);
                                                }}
                                            >
                                                Annehmen
                                    </Button>
                                            <Button
                                                onClick={() => {
                                                    handleVacationRequest(id, 2);
                                                }}
                                            >
                                                Ablehnen
                                        </Button>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </Accordion>
            </>
        );
    }
    return null;
};

export default DepartmentAdministration;
