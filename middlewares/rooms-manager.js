const ROOMS = [
    {key:'general',name:'General forum',details:'Where we can talk about gaming news, consoles, reomtes,...'}, 
    {key:'rocket',name:'Rocket league', details:'All about our football-car favourite game'}, 
    {key:'overcooked',name:'Overcooked', details:'Do you like games and cooking? This is your channel'}
];
module.exports = (req, res, next) => {
    res.locals.rooms=ROOMS;
    //console.log(ROOMS)
    next();
}