import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        Connectez votre compte Garmin à WeWard!
      </Text>

      <Text style={styles.explanations}>
        Pour connecter votre compte Garmin à WeWard, nous avons besoin de
        quelques autorisations :
      </Text>

      <View style={styles.buttonView}>
        <Button
          title='Connecter mon compte Google'
          onPress={() => {
            console.log('hey there google');
          }}
        />
      </View>

      <View style={styles.buttonView}>
        <Button
          title='Connecter mon compte Garmin'
          onPress={() => {
            console.log('hey there garmin');
          }}
        />
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 16,
    marginBottom: 30,
  },
  explanations: {
    fontSize: 12,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonView: {
    marginBottom: 10,
  },
});

// https://developers.google.com/fit/scenarios/read-daily-step-total?hl=fr
// https://developers.google.com/oauthplayground/#step3&apisSelect=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.activity.read%2Chttps%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.activity.write&auth_code=4%2F0AZEOvhWs2N_0K4nRdywxrmES2VqK1sd9jNrBFNx11SEX1K1grNKtkVXaX9l7D2TnV4XFRQ&refresh_token=1%2F%2F04eW6lnfgfW0zCgYIARAAGAQSNwF-L9IrQns6wnmWwmkl_RC0q3dadMS3q6m8EykM364lza5tnokMjxmQGasv4eFhojhF4EOKgk8&access_token_field=ya29.a0AfB_byCjlBaieNALOWWRt2UYQZvLrmpH31803s1GavDTUIkbIJnMcIxGgx20g5yj_Z3iH6kOHcwNEdpP0XgvBK68KbTRs8ZzCU7RJb1csLa04oDUpC96Q5PYErDXr2tRMYxUBVt3Nq2ifbmIZHF31hXjmVfKaCgYKATMSARMSFQHsvYlsf-pbrq0mYCUHSfJ5JDfoXw0163&url=https%3A%2F%2Fwww.googleapis.com%2Ffitness%2Fv1%2Fusers%2Fme%2Fdataset%3Aaggregate&content_type=application%2Fjson&http_method=POST&useDefaultOauthCred=unchecked&oauthEndpointSelect=Google&oauthAuthEndpointValue=https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fv2%2Fauth&oauthTokenEndpointValue=https%3A%2F%2Foauth2.googleapis.com%2Ftoken&expires_in=3598&access_token_issue_date=1691076700&for_access_token=ya29.a0AfB_byCjlBaieNALOWWRt2UYQZvLrmpH31803s1GavDTUIkbIJnMcIxGgx20g5yj_Z3iH6kOHcwNEdpP0XgvBK68KbTRs8ZzCU7RJb1csLa04oDUpC96Q5PYErDXr2tRMYxUBVt3Nq2ifbmIZHF31hXjmVfKaCgYKATMSARMSFQHsvYlsf-pbrq0mYCUHSfJ5JDfoXw0163&postData=%7B%0A%20%20%22aggregateBy%22%3A%20%5B%7B%0A%20%20%20%20%22dataTypeName%22%3A%20%22com.google.step_count.delta%22%2C%0A%20%20%20%20%22dataSourceId%22%3A%20%22derived%3Acom.google.step_count.delta%3Acom.google.android.gms%3Aestimated_steps%22%0A%20%20%7D%5D%2C%0A%20%20%22bucketByTime%22%3A%20%7B%20%22durationMillis%22%3A%2086400000%20%7D%2C%0A%20%20%22startTimeMillis%22%3A%201438705622000%2C%0A%20%20%22endTimeMillis%22%3A%201439310422000%0A%7D&includeCredentials=checked&accessTokenType=bearer&autoRefreshToken=unchecked&accessType=offline&prompt=consent&response_type=code&wrapLines=on
