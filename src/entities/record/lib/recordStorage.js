import { storage } from '@/shared/api';
import {RECORDS_STORAGE_KEY} from '../model/constans'

export function getRecords() {
    return storage.get(RECORDS_STORAGE_KEY, []);
}

export function saveRecords(records) {
    storage.set(RECORDS_STORAGE_KEY, records);
}

export function addRecord(record) {
    const records = getRecords();
    const next = [...records, record];
    saveRecords(next);
    return next;
}   