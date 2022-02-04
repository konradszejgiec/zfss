"use strict";
handleEventListener("#form-file", "change", handleXls);
clearPersonDatabase(`${getElementBy("#delete-file").href}`);
