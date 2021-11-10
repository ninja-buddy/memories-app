process.on('uncaughtException', error => {
    console.log('App crash caused due to UNCAUGHT EXCEPTION', error);
});

process.on('unhandledRejection', error => {
    console.log('App crash caused due to UNHANDLED REJECTION', error);
});

process.on('uncaughtExceptionMonitor', error => {
    console.log('App crash caused due to UNCAUGHT EXCEPTION monitor', error);
});

process.on('beforeExit', error => {
    console.log('Before exit', error);
});
