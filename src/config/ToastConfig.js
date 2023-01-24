import { toast } from 'react-toastify';

export function Success() {
  toast.success('Sucesso!');
}

export function Error() {
  toast.error('Algum erro ocorreu!');
}

export function Warning() {
  toast.warning('Atenção!');
}

export function Info() {
  toast.info('');
}
