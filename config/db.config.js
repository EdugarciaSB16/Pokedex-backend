/**
 * Configuración de la base de datos MongoDB
 * 
 */
// Dependencias
const mongoose = require('mongoose');

const MONGODB_URI =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/Pokedex';
mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        console.info(`Successfully connected to the database ${MONGODB_URI}`)
    )
    .catch((error) => {
        console.error(
            `An error ocurred trying to connect to de database ${MONGODB_URI}`,
            error
        );
        // eslint-disable-next-line no-process-exit
        process.exit(0);
    });

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected on app termination');
        // eslint-disable-next-line no-process-exit
        process.exit(0);
    });
});
