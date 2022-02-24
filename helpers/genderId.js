
const getGenderId = (gender) => {
    const Ids = {
        rpg: '62167736bb7fd63a91a704bb',
        shooter: '621736df5d68fee805442ef6'
    }

    let genders = [];
    if(typeof(gender) === 'object') {
        gender.forEach(item => {
            if(item === 'Rpg') genders.push(Ids.rpg);
            if(item === 'Shooter') genders.push(Ids.shooter);
        })
        if(gender.length > genders.length) return false;
        return genders;
    } else {
        if(gender === 'Rpg') return Ids.rpg;
        if(gender === 'Shooter') return Ids.shooter;
    }

    return false;
}

module.exports = {getGenderId};