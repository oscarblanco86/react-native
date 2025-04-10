import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { Platform, ScrollView, KeyboardAvoidingView } from 'react-native';

const isIOS = Platform.OS === 'ios'

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <KeyboardAvoidingView
    behavior={isIOS ? 'height': undefined}
    >
      <ScrollView>
        <ThemedView>
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              placeholder='Nombre completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              // autoComplete='name'
              // keyboardType='numeric'
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder='Correo Electronico'
              autoCapitalize={'words'}
              autoCorrect={false}
              // autoComplete='name'
              keyboardType='email-address'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'
            style={{
              marginBottom: isIOS ? 100 : 20
            }}
          >
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard 
            style={{
              // marginBottom
            }}
          >
            <ThemedTextInput
              placeholder='Telefono'
              autoCapitalize={'words'}
              autoCorrect={false}
              // autoComplete='name'
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
