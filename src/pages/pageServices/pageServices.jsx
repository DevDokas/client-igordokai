import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import axios from '../../services/axios';

import {
  ServicesAppContainer,
  ServicesContainer,
  ButtonContainer,
  OrderButtonContainer,
  ListServices,
  ServiceId,
  ServiceLabel,
  ServicesSection,
  ServicesBackground,
  OrderButton,
  Button,
} from './styles';
import Loading from '../components/Loading/Loading';

export default function Services() {
  const navigate = useNavigate();
  const [service, setService] = React.useState(() => {}, []);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get(`/services/`);
      setService(response.data);
    }
    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/services/${id}`);
      const newService = [...service];
      newService.splice(index, 1);
      setService(newService);
      setIsLoading(false);
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  };

  return (
    <ServicesAppContainer>
      <Loading isLoading={isLoading} />
      <ServicesContainer>
        <ServicesBackground>
          <OrderButtonContainer>
            <OrderButton to="create/">
              <h1>Requisitar nova ordem de serviço</h1>
            </OrderButton>
          </OrderButtonContainer>
          <ServicesSection>
            {service?.map((services, index) => (
              <ListServices key={String(services.id)}>
                <ServiceId>{services.id}</ServiceId>
                <ServiceLabel>{services.job_label}</ServiceLabel>
                <ButtonContainer>
                  <Button>
                    <Link to={`${services.id}/edit`}>
                      <FaEdit className="button" color="black" />
                    </Link>
                  </Button>
                  <Button>
                    <Link
                      to={`${services.id}/delete`}
                      onClick={handleDeleteAsk}
                    >
                      <FaWindowClose className="button" color="black" />
                    </Link>
                    <FaExclamation
                      className="DeleteConfirm"
                      display="none"
                      color="red"
                      onClick={(e) => handleDelete(e, services.id, index)}
                    />
                  </Button>
                </ButtonContainer>
              </ListServices>
            ))}
          </ServicesSection>
        </ServicesBackground>
      </ServicesContainer>
    </ServicesAppContainer>
  );
}
