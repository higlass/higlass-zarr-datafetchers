import React from 'react';
import { HiGlassComponent } from 'higlass';

import viewconfig from './viewconfig.js';

export default function demo() {

    return (
        <div>
            <HiGlassComponent
                viewConfig={viewconfig}
                zoomFixed={false}
            />
        </div>
    );
}