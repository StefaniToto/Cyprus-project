
import { ConfigOption } from '@ngx-formly/core';
import { FormlySelectComponent } from 'src/app/dashboard/components/formly-select/formly-select.component';


export const formlyConfig: ConfigOption = {

    types: [
        {
            name: 'custom-select',
            component: FormlySelectComponent,
            extends: 'select',
          },
        // {
        //     name: 'datatable',
        //     component: DatatableFormComponent,
        //     defaultOptions: {
        //         templateOptions: {
        //             columnMode: 'force',
        //             rowHeight: 'auto',
        //             headerHeight: '40',
        //             footerHeight: '40',
        //             limit: '10',
        //             scrollbarH: 'true',
        //             reorderable: 'reorderable',
        //         },
        //     },
        // },
        // {
        //     name: 'action',
        //     component: ButtoniFormComponent,
        //     defaultOptions: {
        //         templateOptions: {
        //             onlyDelete: true,
        //             onlyUpdate: true,
        //         },
        //     },
        // },

    ]
};

