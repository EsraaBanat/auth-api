'usse strict';

module.exports = (capability) => {
    return (req, res, next) => {
        try {
            if (req.user.actions.includes(capability)) {
                next();
            } else {
                next('This user DONT have Access to this Page');
            }
        } catch (e) {
            next('Invalid Login');
        }
    }
}