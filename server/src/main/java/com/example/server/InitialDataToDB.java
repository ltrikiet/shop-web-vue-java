package com.example.server;

import com.example.server.entity.Category;
import com.example.server.entity.Role;
import com.example.server.entity.Supplier;
import com.example.server.entity.User;
import com.example.server.enums.ERole;
import com.example.server.repository.CategoryRepository;
import com.example.server.repository.RoleRepository;
import com.example.server.repository.SupplierRepository;
import com.example.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.stream.Collectors;

@Component
public class InitialDataToDB implements ApplicationRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private SupplierRepository supplierRepository;


    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) {
        roleRepository.save(new Role(ERole.ROLE_USER));
        roleRepository.save(new Role(ERole.ROLE_ADMIN));

        userRepository.save(
            new User(
                "Admin",
                "",
                "",
                "",
                "adminTest@gmail.com",
                passwordEncoder.encode("12345"),
                roleRepository.findByName(ERole.ROLE_ADMIN).stream().collect(Collectors.toSet()),
                true,
                new Date(),
                new Date())
        );

        categoryRepository.save(
            new Category(
                "Pc",
                "A personal computer (PC) is a multi-purpose microcomputer whose size, capabilities, and price make it feasible for individual use. Personal computers are intended to be operated directly by an end user, rather than by a computer expert or technician.",
                null,
                true,
                new Date(),
                new Date())
        );
        categoryRepository.save(
            new Category(
                "Laptop",
                "A laptop, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer (PC) smaller than a briefcase. A laptop can be easily transported and used in temporary spaces such as on airplanes, in libraries, temporary offices and at meetings.",
                null,
                true,
                new Date(),
                new Date())
        );
        categoryRepository.save(
            new Category(
                "Monitor",
                "A computer monitor is an output device that displays information in pictorial or textual form. A discrete monitor comprises a visual display, support electronics, power supply, housing, electrical connectors, and external user controls.",
                null,
                true,
                new Date(),
                new Date())
        );
        categoryRepository.save(
            new Category(
                "Accessory",
                "Computer accessories are also known as computer peripherals and can include printers and scanners and storage devices.",
                null,
                true,
                new Date(),
                new Date())
        );
        categoryRepository.save(
            new Category(
                "Component",
                "Computer hardware includes the physical parts of a computer, such as the case, central processing unit (CPU), random access memory (RAM), monitor, mouse, keyboard, computer data storage, graphics card, sound card, speakers and motherboard.",
                null,
                true,
                new Date(),
                new Date())
        );
        categoryRepository.save(
            new Category(
                "Table/Chair",
                "A gaming table/chair is a type of chair marketed towards gamers",
                null,
                true,
                new Date(),
                new Date())
        );
        categoryRepository.save(
            new Category(
                "Software",
                "Software is a set of computer programs and associated documentation and data. This is in contrast to hardware, from which the system is built and which actually performs the work.",
                null,
                true,
                new Date(),
                new Date())
        );

        supplierRepository.save(
            new Supplier(
                "Asus",
                "ASUSTeK Computer Inc. is a Taiwanese multinational computer, phone hardware and electronics manufacturer headquartered in Beitou District, Taipei, Taiwan.",
                true,
                null,
                null,
                "mockAsus@gmail.com",
                "https://www.asus.com/",
                null,
                new Date(),
                new Date())
        );
        supplierRepository.save(
            new Supplier(
                "Acer",
                "Acer Inc. is a Taiwanese multinational hardware and electronics corporation specializing in advanced electronics technology, headquartered in Xizhi, New Taipei City.",
                true,
                null,
                null,
                "mockAcer@gmail.com",
                "https://www.acer.com/",
                null,
                new Date(),
                new Date())
        );
        supplierRepository.save(
            new Supplier(
                "Lenovo",
                "Lenovo Group Limited, often shortened to Lenovo is a Chinese multinational technology company specializing in designing, manufacturing, and marketing",
                true,
                null,
                null,
                "mockLenovo@gmail.com",
                "https://www.lenovo.com/",
                null,
                new Date(),
                new Date())
        );
        supplierRepository.save(
            new Supplier(
                "MSI",
                "Micro-Star International Co., Ltd. is a Taiwanese multinational information technology corporation headquartered in New Taipei City, Taiwan.",
                true,
                null,
                null,
                "mockMSI@gmail.com",
                "https://www.msi.com/",
                null,
                new Date(),
                new Date())
        );
        supplierRepository.save(
            new Supplier(
                "Gigabyte",
                "Gigabyte Technology is a Taiwanese manufacturer and distributor of computer hardware. Gigabyte's principal business is motherboards. It shipped 4.8 million motherboards in the first quarter of 2015, which allowed it to become the leading motherboard vendor.",
                true,
                null,
                null,
                "mockGigabyte@gmail.com",
                "https://www.gigabyte.com/",
                null,
                new Date(),
                new Date())
        );
        supplierRepository.save(
            new Supplier(
                "HP",
                "The Hewlett-Packard Company, commonly shortened to Hewlett-Packard or HP, was an American multinational information technology company headquartered in Palo Alto, California.",
                true,
                null,
                null,
                "mockHP@gmail.com",
                "https://www.hp.com/",
                null,
                new Date(),
                new Date())
        );
    }

}