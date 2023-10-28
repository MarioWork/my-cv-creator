import { ref } from 'vue';
import { infoInputNames } from '@/types/section-inputs';
import { sectionNames } from '@/types/section-names';

const data = ref({
    info: {
        firstName: '',
        lastName: '',
        nationality: '',
        birthday: '',
        phone: '',
        email: '',
        location: ''
    }
});

export const useCV = (): any => {
    return {
        data,
        updateField: (
            section: sectionNames,
            field: infoInputNames,
            value: string
        ): void => {
            data.value[section][field] = value;
        }
    };
};
