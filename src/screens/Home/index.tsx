import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image} from 'react-native';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
    
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd(){
        
        if(participants.includes(participantName)){
            return Alert.alert('Participante existe', 'Já existe o participante cadastrado!')
        }
        //return Alert.alert("Participante Cadastrado","Participante cadastrado com sucesso!")
        setParticipants(prevState => [...prevState, participantName]);

        //limpar o campo - precisa alterar no value do TextInput
        setParticipantName('');

    }
    
    function handleParticipantRemove(name: string){
        //return console.log(participants.filter(participant => participant !== name));
        
        
        return Alert.alert("Remover",`Deseja remover o ${name}?`,[
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },{
                text: 'Não',
                style: 'cancel'
            }
        ]);

        //console.warn(`Vc removeu o participante ${name}`);
    }

    return (
      <View style={styles.container}>
        <View style={{width:'150%', backgroundColor: '#0d0d0d', display: 'flex', justifyContent:'center', alignItems:'center', paddingTop:20, paddingBottom:20, top:0, position: 'absolute'}}>
        <Image source={require('../../../img/Logo.png')} style={{width:150, height: 90, resizeMode:'contain', justifyContent:'center',}}/>
        </View>
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#6B6B6B"
                //onChangeText={text => setParticipantName(text)}//evento para quando alterar algo no componente
                onChangeText={setParticipantName}
                value={participantName}
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}><Image source={require('../../../img/Plus.png')} style={{width:50, height: 20, resizeMode:'contain', justifyContent:'center', alignItems: 'center', display: 'flex'}}/>
 </Text>
            </TouchableOpacity>
        </View>
        <View style={{display:'flex', flexDirection:'row', marginBottom: 30,}}>
            <Text style={styles.TextTasks1}>Criadas</Text>
            <Text style={styles.TextTasks2}>Concluídas</Text>
       </View>
        <View style={{borderColor: 'gray', borderWidth: 1, width: '98%', marginBottom: 30, opacity: 0.8, borderRadius: 100, }}></View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                key={item}
                name= {item}
                onRemove={() => handleParticipantRemove(item)}
            />
            )}
            showsVerticalScrollIndicator= {false}
            ListEmptyComponent={() => (
                
                <View style={{display: 'flex', alignItems: 'center'}}>
                <Image source={require('../../../img/LIST.png')} style={{width:100, height: 50, resizeMode:'contain', justifyContent:'center', alignItems: 'center', display: 'flex'}}/>
                <Text style={styles.listEmptyText}>
                        Você ainda não tem tarefas cadastradas
                        {'\n'}
                <Text style={{fontWeight: '300', display: 'none'}}> Crie tarefas e organize seus itens a fazer </Text>
                </Text>
                </View>

            )}
        />
    
        
        {/*<ScrollView showsVerticalScrollIndicator={false}>
            {
                participants.map(participant => (
                    <Participant 
                        key={participant}
                        name= {participant}
                        onRemove={() => handleParticipantRemove("Ana Maria")}
                    />
                ))
            }
        </ScrollView>*/}

        
       
      </View>
    )
  }
  