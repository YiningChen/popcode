import {eventChannel} from 'redux-saga';
import {onAuthStateChanged} from '../clients/firebase';

export default eventChannel(
  emit => onAuthStateChanged(userCredential => emit({userCredential})),
);
