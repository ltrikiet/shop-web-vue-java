<script setup lang="ts">
import { ref, onUpdated } from 'vue';
import { Form as VeeValidationForm, Field as VeeValidationField } from 'vee-validate';
import { FormInputType } from '@/models/enum';
import RichTextEditor from '@/components/rich-text-editor/RichTextEditor.vue';
import { API } from '@/services';
import { imageRule } from '@/utils/validationRules';

export type FormField = {
  label: string;
  name: string;
  cols: string;
  inputType: FormInputType;
  placeholder?: string;
  type?: string;
  prefix?: string;
  itemList?: any[];
  returnObject?: boolean;
  itemTitle?: string;
  itemValue?: string;
  disabled?: boolean;
  hint?: string;
};

interface MyDialogFormProps {
  title: string;
  isShowDialog: boolean;
  formField: FormField[];
  isEdit: boolean;
  initialValue?: { [key: string]: any };
  validationSchema?: { [key: string]: any };
  handleSubmitForm: any;
  handleCloseDialog: Function;
  imageKeyForPreviewOnEdit?: string;
}
const props = defineProps<MyDialogFormProps>();
const previewImage = ref<any>(null);
const handleFileChange = (event: any) => {
  const files: File[] = event.target.files || event.dataTransfer.files;
  const file = files[0];
  if (file && typeof imageRule(file) !== 'string') {
    previewImage.value = URL.createObjectURL(file);
  }
};

onUpdated(async () => {
  if (props.isEdit && props.imageKeyForPreviewOnEdit && props.initialValue?.picture) {
    const result = await API.file.getImage(props.initialValue?.[props.imageKeyForPreviewOnEdit]);
    previewImage.value = result;
  }
});
</script>
<template>
  <v-dialog :model-value="isShowDialog" persistent width="60vw">
    <template v-slot:default>
      <v-card>
        <vee-validation-form
          as="v-form"
          class="p-10"
          @submit="
            (values: any) => {
              handleSubmitForm(values);
              previewImage = null;
            }
          "
          v-slot="{ errors }"
          :initial-values="initialValue"
          :validation-schema="validationSchema"
        >
          <v-card-title>
            <span class="text-h5">{{ title }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col v-for="item in formField" :key="item.label" :cols="item.cols">
                  <div class="text-subtitle-1 text-medium-emphasis">{{ item.label }}</div>

                  <template v-if="item.inputType === FormInputType.TEXT_BOX">
                    <vee-validation-field
                      as="v-text-field"
                      density="compact"
                      variant="outlined"
                      :name="item.name"
                      :placeholder="item.placeholder"
                      :error-messages="errors[item.name]"
                      :type="item.type"
                      :prefix="item.prefix"
                    />
                  </template>

                  <template v-if="item.inputType === FormInputType.FILE">
                    <vee-validation-field v-slot="{ handleChange: defaultHandleChange, errors }" :name="item.name">
                      <v-file-input
                        density="compact"
                        variant="outlined"
                        accept="image/*"
                        @change="
                          (event: Event, shouldValidate: boolean | undefined) => {
                            defaultHandleChange(event, shouldValidate);
                            handleFileChange(event);
                          }
                        "
                        @click:clear="previewImage = null"
                        :hint="item.hint"
                        :error-messages="errors"
                      />
                    </vee-validation-field>
                    <template v-if="previewImage">
                      <div class="mt-8">
                        <div class="text-subtitle-1 text-medium-emphasis">Preview image</div>
                        <v-img cover :src="previewImage" max-height="250px" />
                      </div>
                    </template>
                  </template>

                  <template v-if="item.inputType === FormInputType.RICH_TEXT_EDITOR">
                    <vee-validation-field :name="item.name" v-slot="{ value, handleChange }">
                      {{ value }}
                      <rich-text-editor :handleContentChange="handleChange" :content="value" />
                    </vee-validation-field>
                  </template>

                  <template v-if="item.inputType === FormInputType.TEXT_AREA">
                    <vee-validation-field
                      as="v-textarea"
                      :name="item.name"
                      density="compact"
                      variant="outlined"
                      :error-messages="errors[item.name]"
                    />
                  </template>

                  <template v-if="item.inputType === FormInputType.CHECK_BOX">
                    <vee-validation-field :name="item.name" v-slot="{ handleChange, value }">
                      <v-checkbox
                        type="checkbox"
                        density="compact"
                        variant="outlined"
                        hide-details
                        :model-value="value"
                        @update:model-value="handleChange"
                        :error-messages="errors[item.name]"
                        :unchecked-value="false"
                      />
                    </vee-validation-field>
                  </template>

                  <template v-if="item.inputType === FormInputType.AUTOCOMPLETE">
                    <vee-validation-field :name="item.name" v-slot="{ handleChange, value }">
                      <v-autocomplete
                        density="compact"
                        variant="outlined"
                        :model-value="value"
                        :items="item.itemList"
                        :item-title="item.itemTitle"
                        :item-value="item.itemValue"
                        :error-messages="errors[item.name]"
                        :return-object="item.returnObject"
                        @update:model-value="handleChange"
                      />
                    </vee-validation-field>
                  </template>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="
                () => {
                  previewImage = null;
                  handleCloseDialog();
                }
              "
            >
              Close
            </v-btn>
            <v-btn class="me-4" type="submit" v-if="!$props.isEdit"> Submit </v-btn>
            <v-btn class="me-4" type="submit" v-if="$props.isEdit"> Update </v-btn>
          </v-card-actions>
        </vee-validation-form>
      </v-card>
    </template>
  </v-dialog>
</template>
