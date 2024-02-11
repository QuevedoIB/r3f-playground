import { useGLTF, Clone, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

import { useControls } from "leva";

export default function Fox() {
  const model = useGLTF("./Fox/glTF/Fox.gltf");
  const animations = useAnimations(model.animations, model.scene);

  const { animation } = useControls("Fox animation", {
    animation: {
      value: "",
      options: animations.names,
    },
  });

  useEffect(() => {
    // animations.mixer.stopAllAction();
    const newAction = animations.actions?.[animation]?.play();
    newAction?.reset().fadeIn(0.5).play();
    // animations.actions?.Run.play();
    // setTimeout(() => {
    //   animations.actions?.Walk.play();
    //   animations.actions?.Walk.crossFadeFrom(animations.actions.Run, 1);
    // }, 2000);
    return () => {
      newAction?.fadeOut(0.5);
    };
  }, [animation]);

  return <primitive object={model.scene} scale={0.05} position-x={4} />;
}
