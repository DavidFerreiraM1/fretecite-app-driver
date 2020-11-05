/* eslint-disable import/no-cycle */
import {ModalMenu} from './modal-menu/modal-menu';
import {FreightageRequestList} from './freightage/requests-list';
import {FreightageDoneList} from './freightage/done-list';
import {FreightScheduledList} from './freightage/scheduled-list';
import {StatusText} from './freightage-details/status-text';
import {HeaderProfile} from './freightage/header-profile';
import {TransporterInfo} from './freightage-details/transporter-info';
import {OriginAndDestiny} from './freightage-details/origin-destiny';
import {PaymentMethodsContent} from './payment-methods/payment-methods';
import {Balance} from './transfer/balance';
import {BankAccount} from './transfer/bank-account';
import {PersonalDatForm} from './register/personal-data-form';
import {VehicleDataForm} from './register/vehicle-data-form';
import {
  StyleHeaderProfileContextProvider,
  StyleHeaderProfileContextApi,
} from './freightage/freightage-context';

export {
  /**
   * Abaixo seguem as exportações
   * dos componentes
   */
  ModalMenu,
  FreightageRequestList,
  FreightScheduledList,
  FreightageDoneList,
  StatusText,
  HeaderProfile,
  TransporterInfo,
  OriginAndDestiny,
  PaymentMethodsContent,
  Balance,
  BankAccount,
  PersonalDatForm,
  VehicleDataForm,
  /**
   * Api's de contexto são organizadas
   */
  StyleHeaderProfileContextProvider,
  StyleHeaderProfileContextApi,
};
