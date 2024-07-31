import React, { useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, TextField, CircularProgress } from '@mui/material';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
import '../style/NutriPlanForm.css';
import { useHistory } from 'react-router-dom';

const DiabetesForm = () => {
  const [diabetesType, setDiabetesType] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [physicalActivity, setPhysicalActivity] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [chronicDiseases, setChronicDiseases] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleDiabetesTypeChange = (event) => {
    setDiabetesType(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handlePhysicalActivityChange = (event) => {
    setPhysicalActivity(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChronicDiseasesChange = (event) => {
    setChronicDiseases(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      diabetesType,
      gender,
      age,
      height,
      weight,
      physicalActivity,
      selectedOption,
      chronicDiseases
    };

    try {
      const response = await fetch('http://localhost:3001/api/diabetes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        const assistantOutput = data.assistantOutput;
        history.push('/food', { assistantOutput });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const options = [
    'Нефропатия',
    'Ретинопатия',
    'Диабетическая стопа',
    'Стенокардия',
    'Полинейропатия',
    'Инсульт',
    'Деменция'
  ];

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='features'>
      <p className='title' id='bold'>Форма оценки диабета</p>
      <div className="container_box">
        <div className="container_box2">
          <FormControl
            className="custom-form-control"
            variant="outlined"
            sx={{
              border: 'none',
              '& .MuiOutlinedInput-root': {
                fontFamily: 'CocoSharp Regular',
              },
              '& .MuiInputLabel-root': {
                fontFamily: 'CocoSharp Regular',
              },
            }}
          >
            <InputLabel id="diabetes-type-label">Тип диабета</InputLabel>
            <Select
              labelId="diabetes-type-label"
              id="diabetes-type-select"
              value={diabetesType}
              onChange={handleDiabetesTypeChange}
              label="Тип диабета"
            >
              <MenuItem value="Первый тип">Первый тип</MenuItem>
              <MenuItem value="Второй тип">Второй тип</MenuItem>
              <MenuItem value="Потенциальный (предиабет)">Потенциальный (предиабет)</MenuItem>
              <MenuItem value="Несахарный">Несахарный</MenuItem>
              <MenuItem value="Латентный">Латентный</MenuItem>
              <MenuItem value="Гестационный">Гестационный</MenuItem>
              <MenuItem value="Лабильный">Лабильный</MenuItem>
              <MenuItem value="Почечный">Почечный</MenuItem>
              <MenuItem value="Послеоперационный">Послеоперационный</MenuItem>
              <MenuItem value="Панкреатический">Панкреатический</MenuItem>
              <MenuItem value="Внепанкреатический">Внепанкреатический</MenuItem>
            </Select>
          </FormControl>
  
          <FormControl
            className="custom-form-control"
            variant="outlined"
            sx={{
              border: 'none',
              '& .MuiOutlinedInput-root': {
                fontFamily: 'CocoSharp Regular',
              },
              '& .MuiInputLabel-root': {
                fontFamily: 'CocoSharp Regular',
              },
            }}
          >
            <InputLabel id="gender-label">Пол</InputLabel>
            <Select
              labelId="gender-label"
              id="gender-select"
              value={gender}
              onChange={handleGenderChange}
              label="Пол"
            >
              <MenuItem value="Мужской">Мужской</MenuItem>
              <MenuItem value="Женский">Женский</MenuItem>
            </Select>
          </FormControl>
  
          <TextField
            className="custom-form-control"
            variant="outlined"
            type="number"
            label={<span>Возраст</span>}
            value={age}
            onChange={handleAgeChange}
            sx={{
              border: 'none',
              '& .MuiOutlinedInput-root': {
                fontFamily: 'Helvetica Neue Regular',
              },
              '& .MuiInputLabel-root': {
                fontFamily: 'CocoSharp Regular',
              },
            }}
          />
  
          <div className='weight_and_height'>
            <TextField
              className="height custom-form-control"
              variant="outlined"
              type="number"
              label={<span>Рост (см)</span>}
              value={height}
              onChange={handleHeightChange}
              sx={{
                border: 'none',
                '& .MuiOutlinedInput-root': {
                  fontFamily: 'Helvetica Neue Regular',
                },
                '& .MuiInputLabel-root': {
                  fontFamily: 'CocoSharp Regular',
                },
              }}
            />
  
            <TextField
              className="height custom-form-control"
              variant="outlined"
              type="number"
              label={<span>Вес (кг)</span>}
              value={weight}
              onChange={handleWeightChange}
              sx={{
                border: 'none',
                '& .MuiOutlinedInput-root': {
                  fontFamily: 'Helvetica Neue Regular',
                },
                '& .MuiInputLabel-root': {
                  fontFamily: 'CocoSharp Regular',
                },
              }}
            />
          </div>
  
          <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
            <FormControl
              className="custom-form-control"
              variant="outlined"
              sx={{
                border: 'none',
                '& .MuiOutlinedInput-root': {
                  fontFamily: 'CocoSharp Regular',
                },
                '& .MuiInputLabel-root': {
                  fontFamily: 'CocoSharp Regular',
                },
                flex: 1,
              }}
            >
              <InputLabel id="physical-activity-label">Уровень физической активности</InputLabel>
              <Select
                labelId="physical-activity-label"
                id="physical-activity-select"
                value={physicalActivity}
                onChange={handlePhysicalActivityChange}
                label="Уровень физической активности"
              >
                <MenuItem value="Минимальный">Минимальный</MenuItem>
                <MenuItem value="Низкий">Низкий</MenuItem>
                <MenuItem value="Средний">Средний</MenuItem>
                <MenuItem value="Высокий">Высокий</MenuItem>
                <MenuItem value="Очень высокий">Очень высокий</MenuItem>
              </Select>
            </FormControl>
            
            <IconButton onClick={handleOpen} sx={{ ml: 1 }}>
              <HelpOutlineIcon />
            </IconButton>
          </div>
          
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              borderRadius: '16px',
              boxShadow: 24,
              p: 4,
              outline: 'none',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography id="modal-title" variant="h6" component="h2" >
                Уровни физической активности
              </Typography>
              <IconButton 
                aria-label="close" 
                onClick={handleClose} 
                sx={{ alignSelf: 'flex-end', p: 0.5 }}
              >
                <CloseIcon />
              </IconButton>
              
              </div>
              
              <Typography id="modal-description" sx={{ mt: 2 }}>
                <ul>
                  <li><b>Минимальный:</b> сидячая работа + отсутствие или редкие занятия фитнесом</li>
                  <li><b>Низкий:</b> сидячая работа + занятия фитнесом 1-3 раза/неделю</li>
                  <li><b>Средний:</b> средняя активность + занятия фитнесом 3-5 раз/неделю</li>
                  <li><b>Высокий:</b> высокая активность + занятия фитнесом 6-7 раз/неделю</li>
                  <li><b>Очень высокий:</b> тяжёлая физическая работа + занятия фитнесом</li>
                </ul>
              </Typography>
            </Box>
          </Modal>
        </div>
  
        <div className="form-container">
          <p className="form-title" id='bold'>При наличии укажите осложнения которые у вас есть</p>
          <form className='form_cont'>
            {options.map((option) => (
              <label className="radio-container" key={option}>
                <input
                  className='cf'
                  type="radio"
                  name="complication"
                  value={option.toLowerCase()}
                  checked={selectedOption === option.toLowerCase()}
                  onChange={handleOptionChange}
                />
                <span className="checkmark"></span>
                {option}
              </label>
            ))}
          </form>
        </div>
  
        <TextField
          className="custom-form-control"
          variant="outlined"
          label="Другие хронические заболевания"
          value={chronicDiseases}
          onChange={handleChronicDiseasesChange}
          multiline
          rows={4}
          sx={{
            border: 'none',
            '& .MuiOutlinedInput-root': {
              fontFamily: 'CocoSharp Regular',
            },
            '& .MuiInputLabel-root': {
              fontFamily: 'CocoSharp Regular',
            },
          }}
        />
        <button className='but' type="button" style={{"cursor": "pointer"}} onClick={handleSubmit}>ОТПРАВИТЬ</button>
      </div>
    </div>
  );
}

export default DiabetesForm;
