import {View, ScrollView, Modal, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ExitImage from '../../../assets/images/ExitImage.svg';
import Header1 from '../../../components/Header1';

export default function PrivacyPolicy() {
  return (
    <View style={styles.Container}>
      <Header1 title="Privacy Policy" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.contentView}>
          <Text style={styles.textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            eros in cursus turpis. Duis tristique sollicitudin nibh sit. Dictum
            at tempor commodo ullamcorper a lacus vestibulum sed. Velit
            dignissim sodales ut eu sem integer. Lobortis elementum nibh tellus
            molestie nunc non. Eget dolor morbi non arcu risus quis varius quam
            quisque. Volutpat maecenas volutpat blandit aliquam etiam erat velit
            scelerisque. Mattis enim ut tellus elementum sagittis vitae et.
            Lacus vestibulum sed arcu non odio euismod lacinia at quis. Libero
            nunc consequat interdum varius sit. Ultrices eros in cursus turpis
            massa. Id eu nisl nunc mi ipsum faucibus. Eleifend quam adipiscing
            vitae proin sagittis nisl rhoncus mattis rhoncus. Duis at
            consectetur lorem donec massa sapien faucibus et. Consequat id porta
            nibh venenatis cras sed felis eget. Pharetra et ultrices neque
            ornare aenean. Arcu non odio euismod lacinia at quis risus sed
            vulputate. Eu sem integer vitae justo eget magna fermentum. Eget
            lorem dolor sed viverra ipsum nunc. Penatibus et magnis dis
            parturient montes nascetur ridiculus mus mauris. Eleifend quam
            adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aliquet
            lectus proin nibh nisl condimentum id venenatis a. Sit amet aliquam
            id diam maecenas ultricies. Sit amet risus nullam eget felis eget
            nunc. Est ultricies integer quis auctor elit sed vulputate mi. Nam
            libero justo laoreet sit amet cursus sit amet. Mi proin sed libero
            enim sed faucibus turpis in. Purus non enim praesent elementum
            facilisis leo. Mattis aliquam faucibus purus in massa. Eget nunc
            lobortis mattis aliquam faucibus. Dignissim sodales ut eu sem
            integer vitae justo. Cras sed felis eget velit aliquet. Venenatis
            urna cursus eget nunc scelerisque. Facilisi etiam dignissim diam
            quis enim. Ultrices eros in cursus turpis massa tincidunt dui. Vitae
            aliquet nec ullamcorper sit amet risus nullam eget felis. Fermentum
            odio eu feugiat pretium. Egestas purus viverra accumsan in nisl nisi
            scelerisque eu. Odio pellentesque diam volutpat commodo sed. Nam
            libero justo laoreet sit amet cursus sit amet dictum. Platea
            dictumst vestibulum rhoncus est pellentesque elit. Ut venenatis
            tellus in metus vulputate eu. Pellentesque dignissim enim sit amet
            venenatis. Est ante in nibh mauris cursus mattis molestie a
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
