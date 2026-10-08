import { useState } from 'react';
import { addRecord } from '@/entities/record';

export function useAddRecord() {
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState(null);

    const submit = async (values) => {
        setIsSaving(true);
        setError(null);
        try {
            const record = {
                id: crypto.randomUUID(),
                name: values.name,
                tel: values.tel,
                createdAt: new Date().toISOString(),
            };
            addRecord(record);
            return record;
        } catch (e) {
            setError(e.message);
            throw e;
        } finally {
            setIsSaving(false);
        }
    };

    return { submit, isSaving, error };
}