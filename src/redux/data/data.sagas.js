import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCHING_DATA_START,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAIL,
} from './data.types';

import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFail,
} from './data.actions';

export function* getData() {
  try {
    let res = [
      {
        name: 'Wendigo',
        id: 1,
        info:
          'A creature that was once human but was transformed into an immortal evil spirit when it took up the practice of cannibalism. Wendigos are cursed to wander the land, eternally seeking to fulfill their voracious appetite for human flesh.',
        death_reason: 'Shot with a flare gun',
        killer: 'Dean Winchester',
        murder_weapon: 'Gun',
      },
      {
        name: 'Poltergeist',
        id: 2,
        info:
          'A term used to describe a supposed spirit or ghost that manifests itself by moving and influencing inanimate objects. Reports of poltergeist activity typically feature heavily on raps, bumps, thumps, knocks, footsteps and bed-shaking, all without a discernible point of original or physical reason for occurrence. Many accounts also detail objects being thrown about the room, furniture being moved, and even people being levitated',
        death_reason: 'Defeated by a stronger spirit',
        killer: 'Mary Winchester',
        murder_weapon: 'Spirit',
      },
      {
        name: 'Luther(Vampire)',
        id: 3,
        info:
          'Luther was the leader of a small group of vampires and the mate of female vampire Kate. Luther was apparently born in the 1800s, as Kate says that the Colt was made around when Luther was born. He has history with hunter Daniel Elkins who presumably killed Luther’s family',
        death_reason: 'Shot with the Colt',
        killer: 'John Winchester',
        murder_weapon: 'the Colt',
      },
      {
        name: 'Djinn',
        id: 4,
        info:
          'Djinn are humanoid creatures with tattooed skin that prefer to live in large ruins with a lot of places to hide, and appear to mostly be solitary and hermit like in nature. Though family units of djinn appear to stick together. When djinn access their powers, their eyes will glow blue and their arms will be engulfed in a blue smokeless flame and their tattoos move and extend down their arms.They feed on human blood and can poison their victims with a touch. Their poison causes reality-altering hallucinations and can be used either to kill their victims quickly, or to leave victims in a coma-like state while the djinn feeds on their blood over a long period of time',
        death_reason: 'Stabbed with a silver blade dipped in lambs blood',
        killer: 'Dean Winchester',
        murder_weapon: 'Silver blade',
      },
      {
        name: 'Father Gil',
        id: 5,
        info:
          "Gil was a priest living in Elizabethville, Ohio. When the Devil's Gate in Wyoming was opened, he became possessed by one of the demons who had been meant to serve in Azazel's army. This demon was in a relationship with the demon who possessed Casey and had been lovers for centuries. He seemed to support Sam as the new leader of the demon army, but still goes to kill Dean when he finds that the latter has trapped Casey, and is killed by Sam with the Colt for it",
        death_reason: 'Shot with the Colt',
        killer: 'Sam Winchester',
        murder_weapon: 'the Colt',
      },
    ];
    // const data = axios
    //   .get('data.json')
    //   .then((items) => res.push(items.data.data[0]));
    yield put(fetchDataSuccess(res));
    console.log(res);
  } catch (error) {
    yield put(fetchDataFail(error));
  }
}

export function* getDataForApp() {
  yield takeLatest(FETCHING_DATA_START, getData);
}

export function* dataSagas() {
  yield all([call(getDataForApp)]);
}
